import NickNameList from '@/components/NickNameList';
import { MdSearch } from 'react-icons/md';

export default function Friends() {
  return (
    <main className="w-full h-full pt-[4.375rem]">
      <div className="w-full h-[3.75rem] flex justify-center items-center text-xl font-semibold">친구 찾기</div>
      <div className="w-full h-[2.6875rem] flex items-center mt-[1.125rem]">
        <div className="w-[calc(100%-2.8125rem)] h-full border-y border-black-200 flex items-center">
          {/* 닉네임 최대 글자 수 제한 넣기 */}
          <input type="text" placeholder="닉네임 입력" className="w-full mx-[0.625rem] outline-none" />
        </div>
        <button className="w-[2.8125rem] h-full bg-black-200 flex justify-center items-center">
          <MdSearch size={32} color="white" />
        </button>
      </div>
      <section>
        <NickNameList />
      </section>
    </main>
  );
}