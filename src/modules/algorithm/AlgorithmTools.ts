import AlgorithmBase from "./AlgorithmBase";
import crypto from "crypto";

class AlgorithmTools extends AlgorithmBase {
  constructor() {
    super();
  }

  get Tools() {
    return {
      vault: {
        ...crypto,
      },
    };
  }
}

export default AlgorithmTools;
