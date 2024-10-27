export type TestStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

export interface Test {
  id: string;
  title: string;
  subject: string;
  duration: number;
  questionsCount: number;
  progress: number;
  status: TestStatus;
  dueDate: string;
}