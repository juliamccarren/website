
class VersionCore {
    static info = {"number": "52", "hash": "9A031D"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
