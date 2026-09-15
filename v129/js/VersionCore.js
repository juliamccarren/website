
class VersionCore {
    static info = {"number": "129", "hash": "EC6F5D"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
