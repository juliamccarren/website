
class VersionCore {
    static info = {"number": "77", "hash": "EAB89E"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
