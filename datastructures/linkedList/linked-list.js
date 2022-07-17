import { defaultEquals } from "../utils/defaultEquals";
import { Node } from "../models/linked-list-models";

export default class LinkedlIST {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
}