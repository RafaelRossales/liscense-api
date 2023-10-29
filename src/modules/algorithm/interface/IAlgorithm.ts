export default interface IAlgorithm {
  descrypt: (data: string) => Promise<void>;
}
