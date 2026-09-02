
class VersionCore {
    static info = {"number": "112", "hash": "E333D3"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
