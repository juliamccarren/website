
class VersionCore {
    static info = {"number": "143", "hash": "F2B5D3"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
