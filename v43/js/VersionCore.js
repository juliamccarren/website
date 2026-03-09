
class VersionCore {
    static info = {"number": "43", "hash": "029493"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
