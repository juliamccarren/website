
class VersionCore {
    static info = {"number": "138", "hash": "D69942"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
