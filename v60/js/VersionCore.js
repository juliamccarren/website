
class VersionCore {
    static info = {"number": "60", "hash": "AAA5A6"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
