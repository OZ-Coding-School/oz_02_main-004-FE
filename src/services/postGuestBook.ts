import { postGuestBookProps } from '@/types/guestBookType';
import { axios } from './instance';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const fetchPostGuestBook = async (user_id: number, new_comment: postGuestBookProps) => {
  const commentData = JSON.stringify(new_comment);
  const response = await axios.post(`guestbook/comments/${user_id}/`, commentData);
  console.log(response.data);
  return response.data;
};

export const usePostGuestBook = (user_id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ content, guestbook_user }: postGuestBookProps) =>
      fetchPostGuestBook(user_id, { content, guestbook_user }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guestBook'] });
    },
  });
};
