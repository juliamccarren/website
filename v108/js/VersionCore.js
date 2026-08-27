
class VersionCore {
    static info = {"number": "108", "hash": "CD728B"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
