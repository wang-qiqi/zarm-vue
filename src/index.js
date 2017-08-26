import Input from '../src/input';
import Alert from '../src/alert';
import Panel from '../src/panel';
import PanelHeader from '../src/panel-header';
import PanelTitle from '../src/panel-title';
import PanelBody from '../src/panel-body';
import PanelFooter from '../src/panel-footer';
import PanelMore from '../src/panel-more';
import Cell from '../src/cell';
import Checkbox from '../src/checkbox';
import CheckboxGroup from '../src/checkbox-group';
import Icon from '../src/icon';
import Button from '../src/button';
import Spinner from '../src/spinner';
import Message from '../src/message';
import Radio from '../src/radio';
import RadioGroup from '../src/radio-group';
import Badge from '../src/badge';
import Tabs from '../src/tabs';
import TabPane from '../src/tab-pane';
import Stepper from '../src/stepper';
import Switch from '../src/switch';
import Mask from '../src/mask';
import Toast from '../src/toast';
import Loading from '../src/loading';
import Popup from '../src/popup';
import Uploader from '../src/uploader';
import ActionSheet from '../src/actionsheet';
import Modal from '../src/modal';
import Confirm from '../src/confirm';
import SwipeAction from '../src/swipe-action';
import Swipe from '../src/swipe';
import SwipeItem from '../src/swipe-item';
import Picker from '../src/picker';
import Colume from '../src/column';
import ColumeGroup from '../src/column-group';
import Cascader from '../src/cascader';
import Progress from '../src/progress';
import DatePicker from '../src/date-picker';
import StackPicker from '../src/stack-picker';
import NoticeBar from '../src/notice-bar';

const components = [
  Input,
  Alert,
  Panel,
  PanelHeader,
  PanelTitle,
  PanelBody,
  PanelFooter,
  PanelMore,
  Cell,
  Checkbox,
  CheckboxGroup,
  Icon,
  Button,
  Spinner,
  Message,
  Radio,
  RadioGroup,
  Badge,
  Tabs,
  TabPane,
  Stepper,
  Switch,
  Mask,
  Toast,
  Loading,
  Popup,
  Uploader,
  ActionSheet,
  Modal,
  Confirm,
  SwipeAction,
  Swipe,
  SwipeItem,
  Picker,
  Colume,
  ColumeGroup,
  Cascader,
  Progress,
  DatePicker,
  StackPicker,
  NoticeBar,
];

const install = function (Vue, opts = {}) { // eslint-disable-line no-unused-vars
  /* istanbul ignore if */
  if (install.installed) return;

  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Input,
  Alert,
  Panel,
  PanelHeader,
  PanelTitle,
  PanelBody,
  PanelFooter,
  PanelMore,
  Cell,
  Checkbox,
  CheckboxGroup,
  Icon,
  Button,
  Spinner,
  Message,
  Radio,
  RadioGroup,
  Badge,
  Tabs,
  TabPane,
  Stepper,
  Switch,
  Mask,
  Toast,
  Loading,
  Popup,
  Uploader,
  ActionSheet,
  Modal,
  Confirm,
  SwipeAction,
  Swipe,
  SwipeItem,
  Picker,
  Colume,
  ColumeGroup,
  Cascader,
  Progress,
  DatePicker,
  StackPicker,
  NoticeBar,
};
