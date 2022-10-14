import React, { useEffect, useState } from 'react';
import UploadImg from './UploadImg';
import './UploadForm.css';
import MiniText from './MiniText';

import uploadAndEdit from './upload-edit';
import Selector from './Selector';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../store/reducers/categories';
import {
  loadSubCategories,
  loadSubCategoriesWithId,
} from '../../store/reducers/subCategories';
import LargeText from './LargeText';

const UploadProduct = ({ updatedPage, goBackHandler, updatedType }) => {
  const token = useSelector(state => state.auth.token);
  // IMAGES
  const [img, setImg] = useState(
    updatedPage ? updatedPage.images[0].imageUrl : ''
  );
  const [img2, setImg2] = useState(
    updatedPage && updatedPage.images.length > 1
      ? updatedPage.images[1].imageUrl
      : ''
  );
  const [img3, setImg3] = useState(
    updatedPage && updatedPage.images.length > 1
      ? updatedPage.images[2].imageUrl
      : ''
  );
  const [img4, setImg4] = useState(
    updatedPage && updatedPage.images.length > 3
      ? updatedPage.images[3].imageUrl
      : ''
  );

  // CAT AND SUB CAT
  const [catId, setCatId] = useState(
    updatedPage ? updatedPage.category._id : ''
  );
  const [subCatId, setSubCatId] = useState(
    updatedPage ? updatedPage.subcategory._id : ''
  );
  // NAMES
  const [arabicName, setArabicName] = useState(
    updatedPage ? updatedPage.name.arabic : ''
  );
  const [englishName, setEnglishName] = useState(
    updatedPage ? updatedPage.name.english : ''
  );
  const [arabicHeadText, setArabicHeadText] = useState(
    updatedPage ? updatedPage.headText.arabic : ''
  );
  const [englishHeadText, setEnglishHeadText] = useState(
    updatedPage ? updatedPage.headText.english : ''
  );
  const [arabicSubText, setArabicSubText] = useState(
    updatedPage ? updatedPage.subText.arabic : ''
  );
  const [englishSubText, setEnglishSubText] = useState(
    updatedPage ? updatedPage.subText.english : ''
  );
  const [arabicHintText, setArabicHintText] = useState(
    updatedPage ? updatedPage.hintText.arabic : ''
  );
  const [englishHintText, setEnglishHintText] = useState(
    updatedPage ? updatedPage.hintText.english : ''
  );
  const [arabicDesc, setArabicDesc] = useState(
    updatedPage && updatedPage.arabicLargeDescription
      ? updatedPage.arabicLargeDescription.english
      : ''
  );
  const [arabicDescTitle, setArabicDescTitle] = useState(
    updatedPage && updatedPage.arabicLargeDescription
      ? updatedPage.arabicLargeDescription[0].headTitle
      : ''
  );
  const [englishDesc, setEnglishDesc] = useState(
    updatedPage && updatedPage.englishLargeDescription
      ? updatedPage.englishLargeDescription[0].headTitle
      : ''
  );
  const [englishDescTitle, setEnglishDescTitle] = useState(
    updatedPage && updatedPage.englishLargeDescription
      ? updatedPage.englishLargeDescription[0].headTitle
      : ''
  );
  const [arabicAdditionalDesc, setArabicAdditionalDesc] = useState('');
  const [englishAdditionalDesc, setEnglishAdditionalDesc] = useState('');
  // const [arabicAdditionalDescTitle, setArabicAdditionalDescTitle] = useState(
  //   ''
  // );
  // const [englishAdditionalDescTitle, setEnglishAdditionalDescTitle] = useState(
  //   ''
  // );
  // PRICES
  const [amount, setAmount] = useState('');
  const [amount2, setAmount2] = useState('');
  const [amount3, setAmount3] = useState('');
  const [amount4, setAmount4] = useState('');
  const [price, setPrice] = useState('');
  const [price2, setPrice2] = useState('');
  const [price3, setPrice3] = useState('');
  const [price4, setPrice4] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    if (catId) dispatch(loadSubCategories());
    else {
      dispatch(loadSubCategoriesWithId(catId));
    }
  }, [catId]);
  // useState(() => {
  //   dispatch(loadSubCategoriesWithId(catId));
  // }, [catId]);
  const categories = useSelector(state => state.categories.categories);
  const Subcategories = useSelector(state => state.subCategories.subCategories);

  console.log(updatedType);
  const uploadADHandler = () => {
    const fd = new FormData();
    let prices = [];
    let descriptionsArabic = [];
    let descriptionsEnglish = [];
    let images = [];

    const config = {
      headers: {
        authorization: token,
      },
    };
    // put images date in an array
    if (img) images.push(img);
    if (img2) images.push(img2);
    if (img3) images.push(img3);
    if (img4) images.push(img4);

    // put prices
    if (amount && price)
      prices.push({ currentPrice: price, size: amount, discountPrice: 0 });
    if (amount2 && price2)
      prices.push({
        currentPrice: price2,
        size: amount2,
        discountPrice: 0,
      });
    if (amount3 && price3)
      prices.push({
        currentPrice: price3,
        size: amount3,
        discountPrice: 0,
      });
    if (amount4 && price4)
      prices.push({
        currentPrice: price4,
        size: amount4,
        discountPrice: 0,
      });

    // put description
    if (arabicDescTitle && arabicDesc)
      descriptionsArabic.push({
        headTitle: arabicDescTitle,
        description: [arabicDesc],
      });
    if (englishDesc && englishDescTitle) {
      let finalDescList = [];
      finalDescList.push(englishDesc);
      descriptionsEnglish.push({
        headTitle: englishDescTitle,
        description: finalDescList,
      });
    }

    if (updatedType === 'image') {
      images.forEach((e, i) => {
        fd.append(`image[${i}][image]`, e.image);
        fd.append(`image[${i}][productId]`, e.productId);
        fd.append(`image[${i}][index]`, i);
      });
      uploadAndEdit(
        updatedPage,
        'product',
        fd,
        config,
        goBackHandler,
        'Product Images',
        updatedType
      );
      return;
    }
    if (updatedType === 'text') {
      let data = {
        productId: updatedPage ? updatedPage.id : '',
        catId,
        subcatId: subCatId,
        arabicName,
        englishName,
        alt: 'new alt',
        prices,

        arabicHeadText,
        englishHeadText,
        arabicSubText,
        englishSubText,
        arabicHintText,
        englishHintText,
        englishLargeDescription: descriptionsEnglish,
        arabicLargeDescription: descriptionsArabic,
        arabicAdditionalDesc: [
          {
            key: 'العرض',
            value: arabicAdditionalDesc,
          },
        ],
        englishAdditionalDesc: [
          {
            key: 'width',
            value: englishAdditionalDesc,
          },
        ],
        status: 1,
      };
      uploadAndEdit(
        updatedPage,
        'product',
        data,
        config,
        goBackHandler,
        'Product',
        updatedType
      );
      return;
      //
    } else {
      // fd.append('image', img);
      // images.forEach((e, i) => {
      //   fd.append(`image[${i}]`, e);
      // });
      if (img) fd.append('image', img);
      if (img2) fd.append('image', img2);
      if (img3) fd.append('image', img3);
      if (img4) fd.append('image', img4);
      fd.append('alt', 'product');
      console.log(catId, subCatId);
      fd.append('catId', catId);
      fd.append('subcatId', subCatId);

      fd.append('arabicName', arabicName);
      fd.append('englishName', englishName);

      fd.append('arabicHeadText', arabicHeadText);
      fd.append('englishHeadText', englishHeadText);

      fd.append('arabicSubText', arabicSubText);
      fd.append('englishSubText', englishSubText);

      fd.append('arabicHintText', arabicHintText);
      fd.append('englishHintText', englishHintText);

      descriptionsEnglish.forEach((e, i) => {
        fd.append(`englishLargeDescription[${i}][headTitle]`, e.headTitle);
        fd.append(
          `englishLargeDescription[${i}][description][0]`,
          e.description
        );
      });
      descriptionsArabic.forEach((e, i) => {
        fd.append(`arabicLargeDescription[${i}][headTitle]`, e.headTitle);
        fd.append(
          `arabicLargeDescription[${i}][description][0]`,
          e.description
        );
      });
      prices.forEach((e, i) => {
        fd.append(`prices[${i}][discountPrice]`, e.discountPrice);
        fd.append(`prices[${i}][currentPrice]`, e.currentPrice);
        fd.append(`prices[${i}][size]`, e.size);
      });
    }

    uploadAndEdit(
      updatedPage,
      'product',
      fd,
      config,
      goBackHandler,
      'Product',
      updatedType
    );
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
        <div className='selectors mb-5'>
          <div className='text-container mt-5 mb-0'>
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
        </div>
        <div className='product-input-text mb-3 mt-3'>
          <MiniText
            placeholder='Add Product Name ...'
            label='Product Name'
            setName={setEnglishName}
            name={englishName}
          />
          <MiniText
            placeholder=' ...أضف اسم المُنتج'
            label='اسم المُنتج'
            direction='rtl'
            path='product'
            setName={setArabicName}
            name={arabicName}
          />
        </div>
        <div className='product-input-text mb-3'>
          <MiniText
            placeholder='Add Product Component ...'
            label='Product Component'
            setName={setEnglishHeadText}
            name={englishHeadText}
          />
          <MiniText
            placeholder=' ...أضف مُكونات المُنتج'
            label='مُكونات المُنتج'
            direction='rtl'
            path='product'
            setName={setArabicHeadText}
            name={arabicHeadText}
          />
        </div>
        <div className='product-input-text mb-3'>
          <MiniText
            placeholder='Add Product Benfit ...'
            label='Benefit'
            setName={setEnglishSubText}
            name={englishSubText}
          />
          <MiniText
            placeholder=' ...أضف فائدة المُنتج'
            label='الفائدة'
            direction='rtl'
            path='product'
            setName={setArabicSubText}
            name={arabicSubText}
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
        <div className='product-desc-container mb-5'>
          <div className='container-title'>Product Description</div>
          <div className='product-desc'>
            <MiniText
              classes='mb-3 mt-5'
              placeholder='Add  Title ...'
              btn='Title'
              path='product'
              setName={setEnglishDescTitle}
              name={englishDescTitle}
            />
            <LargeText
              placeholder='Add Description ...'
              btn='Description'
              desc={englishDesc}
              setDesc={setEnglishDesc}
            />
          </div>
        </div>
        <div className='product-desc-container mb-5'>
          <div className='product-desc'>
            <MiniText
              classes='mb-3 mt-5'
              placeholder='...أضف العنوان'
              btn='العنوان'
              path='product'
              setName={setArabicDescTitle}
              name={arabicDescTitle}
              direction='rtl'
              turnText={false}
            />
            <LargeText
              placeholder=' ...أضف الوصف '
              btn='الوصف'
              desc={arabicDesc}
              setDesc={setArabicDesc}
              direction='rtl'
            />
          </div>
        </div>
        <div className='product-small-desc mb-5'>
          <LargeText
            classes='mb-5 mt-5'
            placeholder='Add Short Description ...'
            label='Short Description'
            desc={englishAdditionalDesc}
            setDesc={setEnglishAdditionalDesc}
          />
          <LargeText
            placeholder=' ...أضف وصف مُختصر للمُنتج'
            label='وصف مُختصر'
            direction='rtl'
            desc={arabicAdditionalDesc}
            setDesc={setArabicAdditionalDesc}
          />
        </div>
        <div className='form-btns mt-5'>
          <div className='form-btn' onClick={uploadADHandler}>
            {updatedPage ? 'Save' : 'Upload'}
          </div>
          <div className='form-btn' onClick={goBackHandler}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;
