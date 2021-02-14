export type ClassValue = ClassDictionary | string;

export interface ClassDictionary {
  [id: string]: boolean;
}

declare const mergeString: (...classes: ClassValue[]) => string;

export default mergeString;
