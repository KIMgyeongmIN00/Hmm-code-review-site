import supabase from '@/libs/api/supabase.api';

/**
 * 특정 게시글에 새로운 댓글을 생성하는 함수
 * @param {string} postId - 댓글을 작성할 게시글의 ID
 * @param {string} content - 댓글 내용
 * @throws {Error}
 */
export async function createComment(postId, content) {
  const { error } = await supabase.from('comments').insert({ content, post_id: postId });
  if (error) throw error;
}

/**
 * 특정 댓글을 삭제하는 함수
 * @param {string} commentId - 삭제할 댓글의 ID
 * @throws {Error}
 */
export async function deleteCommentById(commentId) {
  if (!commentId) throw new Error('Missing required fields');

  const { error } = await supabase.from('comments').delete().eq('id', commentId);
  if (error) throw error;
}

/**
 * 특정 댓글을 수정하는 함수
 * @param {string} commentId - 수정할 댓글의 ID
 * @param {string} content - 수정할 댓글 내용
 * @throws {Error}
 */
export async function updateCommentById(commentId, content) {
  if (!commentId || !content) {
    throw new Error('Missing required fields');
  }

  const { error } = await supabase
    .from('comments')
    .update({
      content
    })
    .eq('id', commentId);
  if (error) throw error;
}
