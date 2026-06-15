
class VersionCore {
    static info = {"number": "89", "hash": "3D96FB"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
