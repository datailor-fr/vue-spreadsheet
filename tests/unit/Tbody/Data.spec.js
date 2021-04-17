import { mount } from "@vue/test-utils";
import Tbody from "@/components/TBody/TBody.vue";

// data
import exempleData from "@/data";

let wrapper;

beforeEach(() => {
  const tbodyData = exempleData.products;
  const { headers } = exempleData;
  const { tbodyIndex } = exempleData.customOptions;
  const { trad } = exempleData.customOptions;
  const { disableCells } = exempleData;
  const tbodyHighlight = [];
  const { tbodyCheckbox } = exempleData;
  const { submenuTbody } = exempleData;
  const currentTable = Date.now();
  const filteredList = exempleData.products[0].f.selectOptions;
  const submenuStatusTbody = true;

  wrapper = mount(Tbody, {
    propsData: {
      disableCells,
      headers,
      currentTable,
      tbodyCheckbox,
      tbodyHighlight,
      submenuTbody,
      submenuStatusTbody,
      filteredList,
      tbodyData,
      trad,
      tbodyIndex,
    },
  });

  return wrapper;
});

describe("TBody", () => {
  describe("Render component with props", () => {
    test("Vue Instance", () => {
      expect(wrapper.vm).toBeTruthy();
    });
  });

  describe("Data", () => {
    test("Present Data", () => {
      const tBody = wrapper.vm;

      expect(tBody.emptyCell).toEqual("");
      expect(tBody.eventDrag).toBeFalsy();
      expect(tBody.oldValue).toBeNull();
      // expect(tBody.searchInput).toEqual("");
      expect(tBody.submenuEnableCol).toBeNull();
      expect(tBody.submenuEnableRow).toBeNull();
    });
  });
});
