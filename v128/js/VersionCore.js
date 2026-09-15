
class VersionCore {
    static info = {"number": "128", "hash": "4C19E9"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
