import IScan from "./interface/ISacan";

/**
 * @class Abstract class
 */
class ScanBase implements IScan {
  constructor() {}

  async readDirectory(): Promise<any> {}

  async readFiles(): Promise<void> {}
}

export default ScanBase;
