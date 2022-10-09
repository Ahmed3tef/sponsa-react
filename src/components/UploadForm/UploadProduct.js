import React, { useEffect, useState } from 'react';
import UploadImg from './UploadImg';
import './UploadForm.css';
import MiniText from './MiniText';
import { APIBase } from '../../store/reducers/api';
import uploadAndEdit from './upload-edit';
import Selector from './Selector';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../store/reducers/categories';
import { loadSubCategories } from '../../store/reducers/subCategories';
import LargeText from './LargeText';

const UploadProduct = ({ updatedPage, goBackHandler, token }) => {
  const [arabicName, setArabicName] = useState(
    updatedPage ? updatedPage.arabicName : ''
  );
  const [englishName, setEnglishName] = useState(
    updatedPage ? updatedPage.englishName : ''
  );
  const [img, setImg] = useState(
    updatedPage ? APIBase + updatedPage.imgUrl : ''
  );
  const [img2, setImg2] = useState(
    updatedPage ? APIBase + updatedPage.imgUrl : ''
  );
  const [img3, setImg3] = useState(
    updatedPage ? APIBase + updatedPage.imgUrl : ''
  );
  const [img4, setImg4] = useState(
    updatedPage ? APIBase + updatedPage.imgUrl : ''
  );
  const [imgAlt, setImgAlt] = useState(updatedPage ? updatedPage.imgAlt : '');
  const [catId, setCatId] = useState(
    updatedPage ? updatedPage.category.id : ''
  );
  const [subCatId, setSubCatId] = useState(
    updatedPage ? updatedPage.category.id : ''
  );
  const [amount, setAmount] = useState('');
  const [amount2, setAmount2] = useState('');
  const [amount3, setAmount3] = useState('');
  const [amount4, setAmount4] = useState('');
  const [price, setPrice] = useState('');
  const [price2, setPrice2] = useState('');
  const [price3, setPrice3] = useState('');
  const [price4, setPrice4] = useState('');
  const [arabicHintText, setArabicHintText] = useState('');
  const [englishHintText, setEnglishHintText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadSubCategories());
  }, []);

  const categories = useSelector(state => state.categories.categories);
  const Subcategories = useSelector(state => state.subCategories.subCategories);

  const uploadADHandler = () => {
    // const fd = new FormData();
    // fd.append('image', img);
    // fd.append('alt', imgAlt);
    // fd.append('arabicName', arabicName);
    // fd.append('englishName', englishName);
    // const config = {
    //   headers: {
    //     authorization: token,
    //   },
    //   params: { id: updatedPage.id },
    // };
    // uploadAndEdit(updatedPage, 'cat', fd, config, goBackHandler, 'Category');
  };

  return (
    <div className='product-container'>
      <div className='product-img'>
        <UploadImg
          product={true}
          existingImg={img}
          setImg={setImg}
          title={['Product Photos', 'صور المُنتج']}
        />
        <UploadImg product={true} existingImg={img2} setImg={setImg2} />
        <UploadImg product={true} existingImg={img3} setImg={setImg3} />
        <UploadImg product={true} existingImg={img4} setImg={setImg4} />
      </div>

      <div className='product-input'>
        <div className='text-container mb-5 mt-5'>
          <Selector
            label={
              <>
                <p>Category</p>
                <p>الفئة</p>
              </>
            }
            Id={catId}
            setId={setCatId}
            data={categories}
          />
        </div>
        <div className='text-container mb-5 mt-5'>
          <Selector
            label={
              <>
                <p>Subcategory</p>
                <p>الفئة الفرعية</p>
              </>
            }
            Id={subCatId}
            setId={setSubCatId}
            data={Subcategories}
          />
        </div>
        <div className='product-input-text mb-3 mt-3'>
          <MiniText
            placeholder='Add Product Name ...'
            label='Product Name'
            // setName={setName}
            // name={name}
          />
          <MiniText
            placeholder=' ...أضف اسم المُنتج'
            label='اسم المُنتج'
            direction='rtl'
            path='product'
            // setName={setPhone}
            // name={phone}
          />
        </div>
        <div className='product-input-text mb-3'>
          <MiniText
            placeholder='Add Product Component ...'
            label='Product Component'
            // setName={setName}
            // name={name}
          />
          <MiniText
            placeholder=' ...أضف مُكونات المُنتج'
            label='مُكونات المُنتج'
            direction='rtl'
            path='product'
            // setName={setPhone}
            // name={phone}
          />
        </div>
        <div className='product-input-text mb-3'>
          <MiniText
            placeholder='Add Product Benfit ...'
            label='Benefit'
            // setName={setName}
            // name={name}
          />
          <MiniText
            placeholder=' ...أضف فائدة المُنتج'
            label='الفائدة'
            direction='rtl'
            path='product'
            // setName={setPhone}
            // name={phone}
          />
        </div>
        <div className='product-prices-content'>
          <div className='product-options'></div>
          <div className='product-prices'>
            <MiniText
              classes='me-5'
              placeholder='Add Weight ...'
              label={`Amount   الكمية`}
              setName={setAmount}
              name={amount}
            />
            <MiniText
              classes='me-5'
              placeholder='Add Price ...'
              label={`Price     السعر`}
              setName={setPrice}
              name={price}
            />
          </div>
          <div className='product-prices'>
            <MiniText
              classes='me-5'
              placeholder='Add Weight ...'
              label={`Amount   الكمية`}
              setName={setAmount2}
              name={amount2}
            />
            <MiniText
              placeholder='Add Price ...'
              label={`Price     السعر`}
              setName={setPrice2}
              name={price2}
            />
          </div>
          <div className='product-prices'>
            <MiniText
              classes='me-5'
              placeholder='Add Weight ...'
              label={`Amount   الكمية`}
              setName={setAmount3}
              name={amount3}
            />
            <MiniText
              classes='me-5'
              placeholder='Add Price ...'
              label={`Price     السعر`}
              setName={setPrice3}
              name={price3}
            />
          </div>
          <div className='product-prices'>
            <MiniText
              classes='me-5'
              placeholder='Add Weight ...'
              label={`Amount   الكمية`}
              setName={setAmount4}
              name={amount4}
            />
            <MiniText
              placeholder='Add Price ...'
              label={`Price     السعر`}
              setName={setPrice4}
              name={price4}
            />
          </div>
        </div>
        <div className='product-small-desc'>
          <LargeText
            classes='mb-5'
            placeholder='Add Short Description ...'
            label='Short Description'
            desc={englishHintText}
            setDesc={setEnglishHintText}
          />
          <LargeText
            placeholder=' ...أضف وصف مُختصر للمُنتج'
            label='وصف مُختصر'
            direction='rtl'
            desc={arabicHintText}
            setDesc={setArabicHintText}
          />
        </div>
        <div className='product-desc-container'>
          <div className='container-title'>Product Description</div>
          <div className='product-desc'>
            <MiniText
              classes='mb-3 mt-5'
              placeholder='Add  Title ...'
              btn='Title'
              path='product'
              // setName={setPhone}
              // name={phone}
            />
            <LargeText
              placeholder='Add Description ...'
              btn='Description'
              desc={englishHintText}
              setDesc={setEnglishHintText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;
