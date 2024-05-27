'use client';
import { IconType } from '../interface/types';
import { SvgComputerIcon, SvgPaintIcon, SvgPictureIcon, SvgScuaresIcon } from '../svg/svgs';

interface MenuProps {
    selectedIcon: IconType | null;
    handleIconSelect: (icon: IconType) => void;
}

const Menu = ({ selectedIcon, handleIconSelect }: MenuProps) => {
    return (
        <div className='bg-white flex items-center justify-center gap-20 w-[33rem] md:rounded-lg'>
            <div className="radio-inputs pt-3">
                <label className="radio">
                    <input type="radio" name="radio" checked={selectedIcon === 'picture'} onChange={() => handleIconSelect('picture')} />
                    <span className="name">
                        <div className={`bg-white p-4 rounded-full icon ${selectedIcon === 'picture' ? 'bg-red-500' : ''}`}>
                            <SvgPictureIcon size={33} color={selectedIcon === 'picture' ? '#DE383F' : '#000'} />
                        </div>
                    </span>
                </label>
                <label className="radio">
                    <input type="radio" name="radio" checked={selectedIcon === 'paint'} onChange={() => handleIconSelect('paint')} />
                    <span className="name">
                        <div className={`bg-white p-4 rounded-full icon ${selectedIcon === 'paint' ? 'bg-red-500' : ''}`}>
                            <SvgPaintIcon size={33} color={selectedIcon === 'paint' ? '#DE383F' : '#000'} />
                        </div>
                    </span>
                </label>
                <label className="radio">
                    <input type="radio" name="radio" checked={selectedIcon === 'scuares'} onChange={() => handleIconSelect('scuares')} />
                    <span className="name">
                    <div className={`bg-white p-4 rounded-full icon ${selectedIcon === 'scuares' ? 'bg-red-500' : ''}`}>
                            <SvgScuaresIcon size={33} color={selectedIcon === 'scuares' ? '#DE383F' : '#000'} />
                        </div>
                    </span>
                </label>
                <label className="radio">
                    <input type="radio" name="radio" checked={selectedIcon === 'computer'} onChange={() => handleIconSelect('computer')} />
                    <span className="name">
                        <div className={`bg-white p-4 rounded-full icon ${selectedIcon === 'computer' ? 'bg-red-500' : ''}`}>
                            <SvgComputerIcon size={33} color={selectedIcon === 'computer' ? '#DE383F' : '#000'} />
                        </div>
                    </span>
                </label>
            </div>
        </div>
    );
};

export default Menu;
