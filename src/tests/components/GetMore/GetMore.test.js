import GetMore from "../../../components/getMore/GetMore"
import {create} from "react-test-renderer"

let component;
const func = jest.fn()
const setUp = () => create(<GetMore getMoreNews={func}/>)

describe("GetMore component test", () => {
    beforeEach(() => {
        return component = setUp()
    })
    test("component snapshot", () => {
        expect(component).toMatchSnapshot()
    })
    test("onClick event", () => {
        component.root.findByType("div").props.onClick();
        expect(func.mock.calls.length).toBe(1)
    })
})