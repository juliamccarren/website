
class VersionCore {
    static info = {"number": "81", "hash": "69D22C"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
