
class VersionCore {
    static info = {"number": "141", "hash": "F72D97"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
