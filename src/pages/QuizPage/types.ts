// 퀴즈 타입 정의
export type Quiz = {
    id: number; // 퀴즈 고유 ID
    type: string; // 퀴즈 유형
    question: string; // 질문 내용
    options?: {id: string, type: string, content: string}[]; //옵션
    answer: string; // 정답
    explanation: string; // 해설
};