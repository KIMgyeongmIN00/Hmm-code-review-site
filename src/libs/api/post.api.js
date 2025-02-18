import supabase from '@api/supabase.api';

/**
 * 게시글 목록을 조회하는 함수
 * @param {string} myId - 현재 로그인한 사용자의 ID
 * @param {string} options.language - 프로그래밍 언어 필터 ('전체' 또는 특정 언어)
 * @param {string} options.keyword - 제목 검색 키워드
 * @returns {Promise<Array>} 게시글 목록
 * - id: 게시글 ID
 * - createdAt: 작성일
 * - title: 제목
 * - authorId: 작성자 ID
 * - programmingLanguage: 프로그래밍 언어
 * - likeCount: 좋아요 수
 * - commentCount: 댓글 수
 * - author: 작성자 닉네임
 * - isLiked: 현재 사용자의 좋아요 여부
 * @throws {Error}
 */
export async function getPosts(myId, { language, keyword }) {
  let query = supabase
    .from('posts')
    .select(
      `
      *,
      post_likes (
        user_id
      ),
      comments (post_id),
      users!inner (nickname)
    `
    )
    .order('created_at', { ascending: false })
    .match(language && language !== '전체' ? { programming_language: language } : {});

  if (keyword) {
    query = query.ilike('title', `%${keyword}%`);
  }

  const { data, error } = await query;

  if (error) return [];
  return data.map((post) => ({
    id: post.id,
    createdAt: post.created_at,
    title: post.title,
    authorId: post.user_id,
    programmingLanguage: post.programming_language,
    likeCount: post.post_likes.length,
    commentCount: post.comments.length,
    author: post.users.nickname,
    isLiked: post.post_likes.some((like) => like.user_id === myId)
  }));
}

/**
 * 특정 사용자가 작성한 게시글 목록을 조회하는 함수
 * @param {string} userId - 조회할 사용자의 ID
 * @returns {Promise<Array>} 게시글 목록
 * @throws {Error}
 */
export async function getMyPosts(userId) {
  const { data, error } = await supabase
    .from('posts')
    .select(
      `
      *,
      post_likes (
        user_id
      ),
      comments (post_id),
      users!inner (nickname)
    `
    )
    .order('created_at', { ascending: false })
    .eq('user_id', userId);

  if (error) return [];
  return data.map((post) => ({
    id: post.id,
    createdAt: post.created_at,
    title: post.title,
    authorId: post.user_id,
    programmingLanguage: post.programming_language,
    likeCount: post.post_likes.length,
    commentCount: post.comments.length,
    author: post.users.nickname,
    isLiked: post.post_likes.some((like) => like.user_id === userId)
  }));
}

/**
 * 특정 게시글의 상세 정보를 조회하는 함수
 * @param {string} postId - 조회할 게시글의 ID
 * @param {string} userId - 현재 로그인한 사용자의 ID
 * @returns {Promise<Object>} 게시글 상세 정보
 * - id: 게시글 ID
 * - createdAt: 작성일
 * - title: 제목
 * - userId: 작성자 ID
 * - programmingLanguage: 프로그래밍 언어
 * - likeCount: 게시글 좋아요 수
 * - commentCount: 댓글 수
 * - author: 작성자 닉네임
 * - isLiked: 현재 사용자의 게시글 좋아요 여부
 * - comments: 댓글 목록
 *   - id: 댓글 ID
 *   - userId: 댓글 작성자 ID
 *   - createdAt: 댓글 작성일
 *   - content: 댓글 내용
 *   - author: 댓글 작성자 닉네임
 *   - likeCount: 댓글 좋아요 수
 *   - isLiked: 현재 사용자의 댓글 좋아요 여부
 * @throws {Error}
 */
export async function getPostById(postId, userId) {
  const { data, error } = await supabase
    .from('posts')
    .select(
      `
      *,
      post_likes (
        user_id
      ),
      comments (
        id,
        user_id,
        created_at,
        content,
        comment_likes (
          user_id
        ),
        users (
          nickname
        )
      ),
      users!inner (nickname)
    `
    )
    .eq('id', postId)
    .single();

  if (error || !data) return [];

  return {
    id: data.id,
    createdAt: data.created_at,
    title: data.title,
    content: data.content,
    authorId: data.user_id,
    programmingLanguage: data.programming_language,
    likeCount: data.post_likes.length,
    commentCount: data.comments.length,
    author: data.users.nickname,
    isLiked: data.post_likes.some((like) => like.user_id === userId),
    comments: data.comments.map((comment) => ({
      id: comment.id,
      authorId: comment.user_id,
      createdAt: comment.created_at,
      content: comment.content,
      author: comment.users.nickname,
      likeCount: comment.comment_likes.length,
      isLiked: comment.comment_likes.some((like) => like.user_id === userId)
    }))
  };
}

/**
 * 새로운 게시글을 생성하는 함수
 * @param {string} title - 게시글 제목
 * @param {string} content - 게시글 내용
 * @param {string} programmingLanguage - 프로그래밍 언어
 * @throws {Error}
 */
export async function insertPost(title, content, programmingLanguage) {
  const { error } = await supabase.from('posts').insert({ title, content, programming_language: programmingLanguage });
  if (error) throw error;
}

/**
 * 특정 게시글을 삭제하는 함수
 * @param {string} postId - 삭제할 게시글의 ID
 * @throws {Error}
 */
export async function deletePostById(postId) {
  if (!postId) throw new Error('Missing required fields');

  const { error } = await supabase.from('posts').delete().eq('id', postId);
  if (error) throw error;
}

/**
 * 특정 게시글을 수정하는 함수
 * @param {string} postId - 수정할 게시글의 ID
 * @param {string} title - 수정할 게시글 제목
 * @param {string} content - 수정할 게시글 내용
 * @param {string} programmingLanguage - 수정할 프로그래밍 언어
 * @throws {Error}
 */
export async function updatePostById(postId, title, content, programmingLanguage) {
  if (!postId || !title || !content || !programmingLanguage) {
    throw new Error('Missing required fields');
  }

  const { error } = await supabase
    .from('posts')
    .update({
      title,
      content,
      programming_language: programmingLanguage
    })
    .eq('id', postId);
  if (error) throw error;
}
