
class VersionCore {
    static info = {"number": "132", "hash": "E208B8"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
