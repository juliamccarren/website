
class VersionCore {
    static info = {"number": "93", "hash": "F5F328"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
