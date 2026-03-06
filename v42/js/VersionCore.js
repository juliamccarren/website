
class VersionCore {
    static info = {"number": "42", "hash": "09D5BF"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
