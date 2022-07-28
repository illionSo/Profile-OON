import { Menu, Image } from "antd";
import Navbutton from "./Navbutton";
import Navicon from "./Navicon";
import Navuserimg from "./Navuserimg";

const Navbar = () => {
	return (
		<>
			<Menu mode="horizontal" style={{ display: "flow-root" }}>
				<Menu.Item
					style={{
						marginLeft: "4rem",
						margin: "auto",
						padding: "0.4rem",
					}}
				>
					<a href="/">
						<Image
							src="../favicon.ico"
							alt="opinionLogo"
							style={{
								width: "80px",
								height: "74px",
								padding: "15px 0px 3px 6px",
							}}
						/>
					</a>
				</Menu.Item>
				<div style={{ float: "right" }}>
					<div
						style={{
							marginTop: "1.5rem",
							justifyContent: "space-between",
							padding: "0.4rem",
						}}
					>
						<Navbutton value="Post Opinion" />
						<Navicon />
						<Navuserimg />
					</div>
				</div>
			</Menu>
		</>
	);
};
export default Navbar;
