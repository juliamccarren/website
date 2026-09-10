
class VersionCore {
    static info = {"number": "124", "hash": "A2B68D"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
