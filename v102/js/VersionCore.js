
class VersionCore {
    static info = {"number": "102", "hash": "9BF08E"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
