
class VersionCore {
    static info = {"number": "70", "hash": "3839EF"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
