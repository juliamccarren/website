
class VersionCore {
    static info = {"number": "110", "hash": "5570D6"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
