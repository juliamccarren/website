
class VersionCore {
    static info = {"number": "46", "hash": "CA7AB4"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
