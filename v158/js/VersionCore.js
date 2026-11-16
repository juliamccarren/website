
class VersionCore {
    static info = {"number": "158", "hash": "C6985A"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
