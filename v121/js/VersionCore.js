
class VersionCore {
    static info = {"number": "121", "hash": "5F83C8"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
