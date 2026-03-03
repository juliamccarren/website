
class VersionCore {
    static info = {"number": "35", "hash": "815894"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
