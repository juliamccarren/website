
class VersionCore {
    static info = {"number": "136", "hash": "7AD408"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
