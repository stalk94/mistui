import InfoButton from './buttons/button';
import Typography from './text/typography';
import MarqueText from './text/marque';
import Link from './text/link';
import InfoButtons from './buttons/icon-buttons';
import InfoGroupButton from './buttons/group';
import InfoGroupButtonFiltre from './buttons/f-group';
import Avatar from './data-display/avatar';
import AvatarGrop from './data-display/avatar-group';
import Indicator from './data-display/indicator';
import Badges from './data-display/badge';
import List from './data-display/list';
import DataTable from './data-display/table';
import Table from './data-display/simple-table';
import InputBase from './inputs/inputs';
import Number from './inputs/number';
import Color from './inputs/color';
import Radio from './inputs/radio';
import Switch from './inputs/switch';
import Chek from './inputs/check';
import Slider from './inputs/slider';
import Tabs from './navigation/tabs';
import Menu from './navigation/menu';
import Breadcrumbs from './navigation/breadcrumbs';
import BottomNav from './navigation/bottom-nav';


const TypeTable = ({ preview }) => {

    return(
        <div className="overflow-y-auto">
            <table className="table">
                {/* head */}
                <thead className='bg-gray-600'>
                    <tr>
                        <th>props name</th>
                        <th>type</th>
                        <th>default</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                   {
                        <tr key={index}>
                            <th>{ }</th>
                            <td>{ }</td>
                            <td>{ }</td>
                            <td>{ }</td>
                        </tr>
                   }
                </tbody>
            </table>
        </div>
    );
}

export default function Base({ preview }) {
    

    return (
        <main className="flex flex-col h-full w-full overflow-y-auto">
            <BottomNav />
        </main>
    );
}