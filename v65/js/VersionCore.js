
class VersionCore {
    static info = {"number": "65", "hash": "56F798"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
