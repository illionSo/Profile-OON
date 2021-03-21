export const Menuitem = [
  { title: "About", path: "",id:'1' },
  { title: "Policies", path: "", id:'2'},
  { title: "FAQS", path: "" ,id:'3'},
  { title: "Write", path: "" ,id:'4'},
];

const BottomMenu = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {Menuitem.map(menu => {
          return <h4 key={menu.id}>{menu.title}</h4>;
        })}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <p>Copyright © 2020 Opinion of Nepal Powered by illionSo</p>
      </div>
    </>
  );
};

export default BottomMenu;
