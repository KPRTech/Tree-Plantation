import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Accordion } from 'flowbite-react';
import Button from "../Shared/Navbar/Button";
import subitem from "../Shared/Navbar/subitem";



export default function Dropdown() {
  return (
    <Popover className="relative roboto-con">
      <Popover.Button className="flex items-center text-sm font-semibold leading-6">
        <BiMenu className="text-2xl text-white mx-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
        className='left-0'
      >
        <Popover.Panel className="absolute z-10 mt-1 flex w-screen max-w-max">
          <div className="w-screen flex-auto overflow-hidden bg-[#1b1f23] opacity-95 text-sm leading-6 py-3">
            <div className='w-full'>
                <Link to={'/'}><button className="uppercase text-xs text-white rounded sm:w-11/12 w-10/12 py-3 my-3 font-bold bg-[#d54d4d]">donate</button></Link>
            </div>
            <Accordion alwaysOpen={true} collapseAll={true} className='border-none rounded-none block mx-5'>
                <Accordion.Panel>
                    <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                    <Link to={"/"}>plant trees</Link>
                    </Accordion.Title>
                    <Accordion.Content className='text-left border-none !px-0 !py-0'>
                        <Accordion alwaysOpen={true} collapseAll={true} className='!border-none !rounded-none block ml-4 roboto-con'>
                            <Accordion.Panel>
                                <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                                <Link to={"/"}>By region</Link>
                                </Accordion.Title>
                                <Accordion.Content className='text-left text-white !py-0 !px-0 !pl-2 border-none uppercase'>
                                    <Button link={subitem[0].subLink} subItem={subitem[0].subItem} />
                                    <Button link={subitem[1].subLink} subItem={subitem[1].subItem} />
                                    <Button link={subitem[2].subLink} subItem={subitem[2].subItem} />
                                    <Button link={subitem[3].subLink} subItem={subitem[3].subItem} />
                                    <Button link={subitem[4].subLink} subItem={subitem[4].subItem} />
                                    <Button link={subitem[5].subLink} subItem={subitem[5].subItem} /> 
                                    <Button link={subitem[26].subLink} subItem={subitem[26].subItem} />   
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                                <Link to={"/"}>By impact</Link>
                                </Accordion.Title>
                                <Accordion.Content className='text-left text-white !py-0 !px-0 !pl-2 border-none uppercase'>
                                    <Button link={subitem[27].subLink} subItem={subitem[27].subItem} />
                                    <Button link={subitem[28].subLink} subItem={subitem[28].subItem} />
                                    <Button link={subitem[29].subLink} subItem={subitem[29].subItem} />
                                    <Button link={subitem[30].subLink} subItem={subitem[30].subItem} />
                                    <Button link={subitem[31].subLink} subItem={subitem[31].subItem} />
                                    <Button link={subitem[32].subLink} subItem={subitem[32].subItem} /> 
                                    <Button link={subitem[33].subLink} subItem={subitem[33].subItem} />
                                    <Button link={subitem[34].subLink} subItem={subitem[34].subItem} />
                                    <Button link={subitem[35].subLink} subItem={subitem[35].subItem} /> 
                                    <Button link={subitem[36].subLink} subItem={subitem[36].subItem} />     
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                                <Link to={"/"}>for others</Link>
                                </Accordion.Title>
                                <Accordion.Content className='text-left text-white !py-0 !px-0 !pl-2 border-none uppercase'>
                                    <Button link={subitem[37].subLink} subItem={subitem[37].subItem} />
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                    <Link to={"/"}>about</Link>
                    </Accordion.Title>
                    <Accordion.Content className='text-left border-none !px-0 !py-0'>
                        <Accordion alwaysOpen={true} collapseAll={true} className='border-none rounded-none block ml-4 roboto-con'>
                            <Accordion.Panel>
                                <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                                <Link to={"/"}>our organization</Link>
                                </Accordion.Title>
                                <Accordion.Content className='text-left text-white !py-0 !px-0 !pl-2 border-none uppercase'>
                                    <Button link={subitem[38].subLink} subItem={subitem[38].subItem} />
                                    <Button link={subitem[39].subLink} subItem={subitem[39].subItem} />
                                    <Button link={subitem[17].subLink} subItem={subitem[17].subItem} /> 
                                    <Button link={subitem[16].subLink} subItem={subitem[16].subItem} />     
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                                <Link to={"/"}>our impact</Link>
                                </Accordion.Title>
                                <Accordion.Content className='text-left text-white !py-0 !px-0 !pl-2 border-none uppercase'>
                                    <Button link={subitem[40].subLink} subItem={subitem[40].subItem} />
                                    <Button link={subitem[41].subLink} subItem={subitem[41].subItem} />
                                    <Button link={subitem[42].subLink} subItem={subitem[42].subItem} /> 
                                    <Button link={subitem[43].subLink} subItem={subitem[43].subItem} />     
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                    <Link to={"/"}>get involved</Link>
                    </Accordion.Title>
                    <Accordion.Content className='text-left border-none !px-0 !py-0'>
                        <Accordion alwaysOpen={true} collapseAll={true} className='border-none rounded-none block ml-4 roboto-con'>
                            <Accordion.Panel>
                                <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                                <Link to={"/"}>businesses</Link>
                                </Accordion.Title>
                                <Accordion.Content className='text-left text-white !py-0 !px-0 !pl-2 border-none uppercase'>
                                    <Button link={subitem[44].subLink} subItem={subitem[44].subItem} />
                                    <Button link={subitem[9].subLink} subItem={subitem[9].subItem} />
                                    <Button link={subitem[45].subLink} subItem={subitem[45].subItem} /> 
                                    <Button link={subitem[46].subLink} subItem={subitem[46].subItem} />     
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                                <Link to={"/"}>individuals</Link>
                                </Accordion.Title>
                                <Accordion.Content className='text-left text-white !py-0 !px-0 !pl-2 border-none uppercase'>
                                    <Button link={subitem[24].subLink} subItem={subitem[24].subItem} />
                                    <Button link={subitem[25].subLink} subItem={subitem[25].subItem} />
                                    <Button link={subitem[19].subLink} subItem={subitem[19].subItem} /> 
                                    <Button link={subitem[27].subLink} subItem={subitem[27].subItem} />     
                                    <Button link={subitem[47].subLink} subItem={subitem[47].subItem} />     
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                    <Link to={"/"}>learn</Link>
                    </Accordion.Title>
                    <Accordion.Content className='text-left border-none !px-0 !py-0'>
                        <Accordion alwaysOpen={true} collapseAll={true} className='border-none rounded-none block ml-4 roboto-con'>
                            <Accordion.Panel>
                                <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                                <Link to={"/"}>about trees</Link>
                                </Accordion.Title>
                                <Accordion.Content className='text-left text-white !py-0 !px-0 !pl-2 border-none uppercase'>
                                    <Button link={subitem[18].subLink} subItem={subitem[18].subItem} />
                                    <Button link={subitem[20].subLink} subItem={subitem[20].subItem} />
                                    <Button link={subitem[19].subLink} subItem={subitem[19].subItem} />
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                                <Link to={"/"}>tree topics</Link>
                                </Accordion.Title>
                                <Accordion.Content className='text-left text-white !py-0 !px-0 !pl-2 border-none uppercase'>
                                    <Button link={subitem[48].subLink} subItem={subitem[48].subItem} />
                                    <Button link={subitem[49].subLink} subItem={subitem[49].subItem} />
                                    <Button link={subitem[50].subLink} subItem={subitem[50].subItem} />     
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                                <Link to={"/"}>Education</Link>
                                </Accordion.Title>
                                <Accordion.Content className='text-left text-white !py-0 !px-0 !pl-2 border-none uppercase'>
                                    <Button link={subitem[51].subLink} subItem={subitem[51].subItem} />
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                                <Link to={"/"}>resources</Link>
                                </Accordion.Title>
                                <Accordion.Content className='text-left text-white !py-0 !px-0 !pl-2 border-none uppercase'>
                                    <Button link={subitem[22].subLink} subItem={subitem[22].subItem} />
                                    <Button link={subitem[56].subLink} subItem={subitem[56].subItem} />
                                    <Button link={subitem[57].subLink} subItem={subitem[57].subItem} />
                                    <Button link={subitem[58].subLink} subItem={subitem[58].subItem} />
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                    <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                    <Link to={"/"}>shop</Link>
                    </Accordion.Title>
                    <Accordion.Content className='text-left border-none !px-0 !py-0'>
                        <Accordion alwaysOpen={true} collapseAll={true} className='border-none rounded-none block ml-4 roboto-con'>
                            <Accordion.Panel>
                                <Accordion.Title className='text-lg !px-3 !py-3 border-none !text-white font-light uppercase roboto-con !bg-transparent focus:border-none active:border-none focus:!ring-0 active:!ring-0 active:!bg-transparent focus:!bg-transparent hover:bg-transparent'>
                                <Link to={"/"}>by collection</Link>
                                </Accordion.Title>
                                <Accordion.Content className='text-left text-white !py-0 !px-0 !pl-2 border-none uppercase'>
                                    <Button link={subitem[52].subLink} subItem={subitem[52].subItem} />
                                    <Button link={subitem[53].subLink} subItem={subitem[53].subItem} />
                                    <Button link={subitem[54].subLink} subItem={subitem[54].subItem} />
                                    <Button link={subitem[55].subLink} subItem={subitem[55].subItem} />
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </Accordion.Content>
                </Accordion.Panel>

            </Accordion>
            <div className='flex flex-col text-white font-light uppercase text-lg text-left px-8 '>
                <Link to={"/"} className='py-3'>Contact us</Link>
                <Link to={"/"} className='py-3'>newsletter</Link>
                <Link to={"/"} className='py-3'>1-800-408-7850</Link>
                <Link to={"/"} className='py-3'>login</Link>
            </div>
            
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
