// R indica qual props deseja substituir da classe T.
export type Replace<T, R> = Omit<T, keyof R> & R;
