
class VersionCore {
    static info = {"number": "133", "hash": "9C5CDE"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
