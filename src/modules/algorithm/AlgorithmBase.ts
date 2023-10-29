import IAlgorithm from "./interface/IAlgorithm";

class AlgorithmBase implements IAlgorithm {
  protected salt: string;
  constructor() {
    this.salt = "2a8718875d0320e5574602a3db08379c0e650c18";
  }

  getSalt() {
    return this.salt;
  }

  async descrypt(data: string): Promise<void> {}
}

export default AlgorithmBase;
