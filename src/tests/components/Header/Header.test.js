import Header from "../../../components/header/Header";
import {create} from "react-test-renderer"

describe("Header component test", () => {
    test("component snapshot",()=>{
        const component = create(<Header/>)
        expect(component).toMatchSnapshot()
    })
})