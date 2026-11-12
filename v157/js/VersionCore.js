
class VersionCore {
    static info = {"number": "157", "hash": "711B06"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
