
class VersionCore {
    static info = {"number": "87", "hash": "D04827"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
